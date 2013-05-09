define ['jquery', 'underscore'], ($, _) ->

    addOnceDeferreds = (obj) ->
        # Populate the once-deferred handlers
        for name, [func, args] of obj._deferred.once
            obj._deferred.done do (args) ->
                func args...

    Deferrable =
        deferred: {}

        initialize: ->
            @pending()
            # Takes an object of method names and flags for implicitly
            # wrapping class methods in a deferred execution
            for method, once of @deferred
                func = @[method]
                @[method] = =>
                    @defer method, func, once, arguments

        # Initializes (or resets) the deferred object
        pending: ->
            (@_deferred = $.Deferred()).once = {}
            return @

        # Used for deferring method/function calls. If `once` is true and a name
        # is supplied, the named function will only be deferred once to prevent
        # multiple redundant calls.
        defer: (name, func, once=false, args) ->
            if not @_deferred? then @pending()
            if _.isString name
                if _.isBoolean func
                    once = func
                    func = @[name]
                if once and @_deferred.state() is 'pending'
                    @_deferred.once[name] = [func, args]
                    return @
            else
                func = name
            @_deferred.done -> func args...
            return @

        # Resolve the deferred object
        resolve: (context=@)->
            if @_deferred
                addOnceDeferreds @
                @_deferred.resolveWith context
            return @

        reject: (context=@) ->
            if @_deferred
                addOnceDeferreds @
                @_deferred.rejectWith context
            return @

        # Implements the promise interface
        promise: ->
            if not @_deferred? then @pending()
            return @_deferred.promise arguments...

        when: (func) ->
            $.when(@).done(func)

        state: ->
            @_deferred.state()

    Deferrable.resolveWith = Deferrable.resolve
    Deferrable.rejectWith = Deferrable.reject

    { Deferrable }

define [
    'environ'
    'mediator'
    'underscore'
    'serrano'
], (environ, mediator, _, Serrano) ->

    class DataViews extends Serrano.DataViews
        url: environ.absolutePath '/api/views/'

        initialize: ->
            @deferred = @fetch()

        getNamed: ->
            @filter (model) -> model.get('name')


    class DataViewHistory extends Serrano.DataViews
        url: environ.absolutePath '/api/views/history/'

         initialize: ->
            @deferred = @fetch()


    App.DataView = new DataViews
    App.DataViewHistory = new DataViewHistory

    # Special treatment for the session
    App.DataView.deferred.done ->
        if not (session = App.DataView.getSession())
            session = App.DataView.create session: true

        App.DataView.session = session

        session.on 'sync', ->
            mediator.publish 'dataview/change'
define ['backbone', 'underscore'], (Backbone, _) ->

    class FieldModel extends Backbone.Model


    class FieldCollection extends Backbone.Collection
        model: FieldModel
		
        search: (query, process) ->
            Backbone.ajax
                url: _.result @, 'url'
                data: q: query
                success: (resp) ->
                    process(resp)


    { FieldModel, FieldCollection }

define [
    '../core'
    './cell'
], (c, cell) ->


    class Row extends c.Marionette.CollectionView
        tagName: 'tr'

        template: ->

        itemView: cell.Cell


    class EmptyRow extends c.Backbone.View
        className: 'empty'

        tagName: 'tr'

        render: ->
            @$el.html 'Loading...'
            return @


    { Row, EmptyRow }

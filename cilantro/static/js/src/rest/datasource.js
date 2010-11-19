define(

    'rest/datasource',
    
    ['rest/basext'],
    
    function(BaseExt) {
    
        var DataSource = BaseExt.extend({});

        var AjaxDataSource = DataSource.extend({

            get: function(params) {
                params = params || this.params;

                var self = this;

                this.xhr = $.ajax({
                    url: self.uri,
                    data: params,
                    cache: self.cache,
                    success: self.success,
                    error: self.error
                });

                return this;
            }
        }, {
            defargs: {
                uri: window.location,
                params: {},
                success: function() {},
                error: function() {},
                cache: false 
            }
        });

        return {
            ajax: AjaxDataSource
        };

    }
);

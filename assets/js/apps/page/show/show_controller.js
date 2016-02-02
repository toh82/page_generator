define([
    'app',
    'apps/page/show/show_view'
], function(pageCreatorApp) {
    pageCreatorApp.module("PageApp.Show", function(Show, pageCreatorApp, Backbone, Marionette, $, _) {
        var Controller = Marionette.Controller.extend({
            action: function() {

                var self = Show.Controller;

                // FETCH RESULTS FROM ENTITY -----------------------------------
                var fetchRequest = pageCreatorApp.request("someEntity:entity");

                $.when(fetchRequest).done(function(fetchedModel) {
                    var exampleView = new Show.ExampleView({
                        model: fetchedModel
                    });

                    // VIEW EVENTS ---------------------------------------------
                    self.listenTo(exampleView, "view:action", function() {
                        pageCreatorApp.PageApp.trigger("example:otherAction");
                    });

                    pageCreatorApp.mainRegion.show(exampleView);
                });
            },

            action2: function() {
                // do operations here
            }
        });

        Show.Controller = new Controller();
    });

    return pageCreatorApp.PageApp.Show;
});
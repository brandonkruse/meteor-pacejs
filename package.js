Package.describe({
    summary: "An automatic web page progress bar (version synced with actual pace library)"
});

Package.on_use(function(api) {

    // For debugging - add pace non-min
    //api.add_files("pace.js", 'client'); 

    api.add_files("pace.min.js", 'client');

});

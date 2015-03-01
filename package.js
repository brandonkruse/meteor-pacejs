Package.describe({
    name: 'bkruse:pace',
    summary: "An automatic web page progress bar (version synced with actual pace library)"
    git: 'git@github.com:brandonkruse/meteor-pacejs.git'

});

Package.on_use(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

    // For debugging - add pace non-min
    //api.add_files("pace.js", 'client'); 

    api.add_files("pace.min.js", 'client');

});

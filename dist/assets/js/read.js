var fs = require("fs");
var os = require("os");

var externalJavascriptFiles = [
    'vendor/modernizr-3.5.0.min.js',
    'vendor/jquery-1.12.4.min.js',
    'plugins/popper.min.js',
    'plugins/bootstrap.min.js',
    'plugins/owl.carousel.min.js',
    'plugins/isotope.pkgd.min.js',
    'plugins/ajax-form.js',
    'plugins/waypoints.min.js',
    'plugins/jquery.counterup.min.js',
    'plugins/imagesloaded.pkgd.min.js',
    'plugins/scrollIt.js',
    'plugins/jquery.scrollUp.min.js',
    'plugins/wow.min.js',
    'plugins/nice-select.min.js',
    'plugins/jquery.slicknav.min.js',
    'plugins/jquery.magnific-popup.min.js',
    'plugins/plugins.js',
    'plugins/contact.js',
    'plugins/jquery.ajaxchimp.min.js',
    'plugins/jquery.form.js',
    'plugins/jquery.validate.min.js',
    'plugins/mail-script.js',
    'plugins/main.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors.js', data.toString() + os.EOL, function (err) {
                if (err) { console.log(err) }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});

var externalJavascriptUrls = [
    // 'https://code.jquery.com/jquery-3.4.1.min.js'
]

console.log(externalJavascriptUrls.length + " number of Url(s).");

const getScript = (url) => {
    return new Promise((resolve, reject) => {
        const http      = require('http'),
            https     = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(
                    setTimeout(() => {
                        fs.appendFile('vendors.js', data.toString() + os.EOL, function (err) {
                            if (err) { console.log(err) }
                            console.log(url +" written to file.");
                        });
                    }, 500)
                );
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

externalJavascriptUrls.map((element, index) => {
    (async (url) => {
        try {
            console.log(await getScript(url));
        }
        catch (error) {
    
        }
    })(element);
});
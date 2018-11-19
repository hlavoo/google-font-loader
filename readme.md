# Google Font Loader

This script is designed to decrease the perceived page loading time, while still maintaining the visual integrity of your site.

Completely deferring the loading of fonts will cause an unpleasant flicker as the fonts load in after the page has rendered.

This script solves this problem by allowing you to specify loading of the base font ahead of time, and lazy loading addition font faces, such as bold or italics.


## Usage

In this example, we want to add **Roboto** with *italic*, *bold*, and *bold italic* versions. Add the usual Google Fonts tag to the `head` of your site.

If we set this up from Google Fonts you will get the following code:
```<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">```

However, loading these 4 font styles before the page renders can slow down the load time a bit more than is ideal. So we will keep the main font family, but remove all of the additional styles, and move these additional styles to a new `data-fonts` attribute:
```<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" data-fonts="Roboto:400,400i,700,700i">```

Now, your site will load the main Roboto font *before* rendering the page, and after that the `google-font-loader.js` script will download the additional fonts specified in `data-fonts`.

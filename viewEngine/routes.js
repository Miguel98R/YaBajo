const express = require('express')
const router = express.Router()
const resources = require('../public/js/cdnRecurses').website;

const validateSession = require('./../middleware/validateSession')


///------------------------- RUTAS PARA CONTROLPANEL----------------------- ///



let url_js_files = './public/js/core'

//LOGIN PAGE C.PANEL
router.get("/login", (req, res) => {


    let message_error = ''

    if (req?.query?.message_error) {
        message_error = req.query.message_error
    }


    res.render("login", {
        title: 'YaBajo! | Login',
        resources,
        url_js_files,
        message_error: message_error

    });

});

//DASHBOARD
router.get("/home", validateSession, (req, res) => {


    //let menu = req?.session?.menu


    res.render("home", {
        title: 'YaBajo!| Home',
        resources,
        theme,
        //menu,
        url_js_files
    });

});


module.exports = router


let menu = [
    {
        access: ['admin'],
        title: 'Configuracion general',
        elements: [
            {
                icon: 'fas fa-columns',
                title: 'Dashboard',
                ref: '/panel'
            }, {
                icon: 'fas fa-check-square',
                title: 'Secciones pagina web',
                ref: '/webConfiguration'
            }, {

                icon: 'fas fa-credit-card',
                title: 'OpenPay',
                ref: '/configOpenpay'
            }, {

                icon: 'fas fa-mail-bulk',
                title: 'Correos y generalidades',
                ref: '/mailConfig'
            },
            {
                icon: 'fas fa-cogs',
                title: 'ERP',
                ref: '/configERP'
            },
            {
                icon: 'fas fa-pager',
                title: 'Pago de guias',
                ref: '/paymentGuides'
            },
        ]
    },


]
let validateSession = function (req, res, next) {

    console.log("req.session.user", req.session.user)
    if (req.session.user) {


        /*
            let dataUser = req.session.user
           let meenu

          if (dataUser.usersTypes == 'admin') {

              meenu = menu.filter(menuItem => menuItem.access.includes('admin'));
              req.session.menu = meenu
              next();
          }*/

        next();


    } else {
        res.redirect('/home');
    }
}

module.exports = validateSession
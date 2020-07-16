module.exports = function (app) {
    app.use('/', require('../routes/home.route'));
    app.use('/users', require('../routes/users.route'));
    app.use('/ticket', require('../routes/ticket.route'));
    app.use('/flight',require('../routes/flight.route'));
    app.use('/airport',require('../routes/airport.route'));
    app.user('/order',require('../routes/order.route'));
};
const houses = require('./db.json')
let houseID = 4

module.exports = {
    getHouse: function(req, res){
        res.status(200).send(houses)
    },
    delHouse: function(req, res){
        const tgtId = houses.findIndex
        (function(houseObj){
            return houseObj.id === +req.params.houseID
        });
        houses.splice(tgtId, 1);
        res.status(200).send(houses);
    },
    createHouse: function(req, res){
        const {address, price, imageUrl} = req.body;
        const newHouse = {houseID, address, price, imageUrl};
        houses.push(newHouse);
        houseID++ 
        res.status(200).send(houses);
    },
    updateHouse: function(req, res){
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }}

        // const {houseID, type} = req.body;
        // findIndex(function(houseObj){
        // return houseObj.id === req.params.houseId;
        // for(let i = 0; i < houseObj.length; i++){
        //     if()
        // }})


//         const newPrice = {houseID, type}
//         for (let i = 0; i < houses.length; i++){
//             if (houses.findIndex(
//                 function(houseObj){
//                     return houseObj.id === req.params.houseID

//                 })
//             )
//         }
//     }
// }

const express = require('express');
const router = express.Router();
const db = require('../database');


/* Listar facturas */
router.get('/factura', (req, res) => {

    db.query('select * from factura', (err, rows) => {

        if (!err) {
            res.json(rows);
        } else {
            res.json('No se pudo obtener ninguna factura');
        }
    });
});

/* Eliminar factura */
router.delete('/factura/:producto', (req, res) => {

    let id = req.params.producto;

    db.query('delete from factura where id_factura = ?', [id]);

    res.json('Se elimino la factura exitosamente');
});
/* Almacenar una factura */
router.post('/factura', (req, res) => {

    let unFac = req.body;

    db.query('insert into factura set ?', [unFac]);

    res.json('Se registro correctamente la factura');

});
/* Actualizar una factura */
router.put('/factura/:codigo', (req, res) => {

    let id = req.params.codigo;
    let unFac = req.body;

    db.query('update factura set ? where id_factura = ?', [unFac, id]);

    res.json('Se actualizo la factura correctamente.');
});
/* busqueda para una factura */
router.get('/factura/:codigo', (req, res) => {

        let id = req.params.codigo;

        db.query('select * from factura where id_factura = ?', [id], (err, rows) => {

            if (!err) {
                res.json(rows);
            } else {
                res.json('No hay una factura asociada al ID indicado');
            }
        });
    }),

    module.exports = router;
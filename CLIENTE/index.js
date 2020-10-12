const app = new Vue({

    el: "#facturas",
    data: {
        c_idfactura: null,
        c_producto: '',
        c_cliente: '',
        c_iva: '',
        c_cantidad: null,
        c_subtotal: null,
        c_total: null,
        c_pago: '',
        c_busq_fac: null,

        lista_facturas: []
    },

    methods: {

        listarFacturas() {

            axios.get('http://localhost:5000/factura').then(resultado => {

                this.lista_facturas = resultado.data;

            });
        },
        eliminarFactura() {


            id_factura = this.c_idfactura;

            axios.delete('http://localhost:5000/factura/' + id_factura).then(resultado => {

                alert(resultado.data);

                this.listarFacturas();

                this.c_idfactura = null;
            });

        },

        guardarFactura() {

            let unFac = {

                nombre_producto: this.c_producto,
                nombre_cliente: this.c_cliente,
                iva: this.c_iva,
                cantidad: this.c_cantidad,
                subtotal: this.c_subtotal,
                total: this.c_total,
                forma_pago: this.c_pago,
            }

            axios.post('http://localhost:5000/factura', unFac).then(resultado => {

                this.listarFacturas();
            })

            this.c_producto = '';
            this.c_cliente = '';
            this.c_iva = '';
            this.c_cantidad = null;
            this.c_subtotal = null;
            this.c_total = null;
            this.c_pago = '';

        },

        buscarFactura() {

            axios.get('http://localhost:5000/factura/' + this.c_busq_fac).then(resultado => {


                this.lista_facturas = resultado.data;

            });

        },

        editarFactura(id_factura, nombre_producto, nombre_cliente, iva, cantidad, total, subtotal, forma_pago) {

            this.c_idfactura = id_factura;
            this.c_producto = nombre_producto;
            this.c_cliente = nombre_cliente;
            this.c_iva = iva;
            this.c_cantidad = cantidad;
            this.c_subtotal = subtotal;
            this.c_total = total;
            this.c_pago = forma_pago;
        },

        actualizarFactura() {

            let unFac = {

                nombre_producto: this.c_producto,
                nombre_cliente: this.c_cliente,
                iva: this.c_iva,
                cantidad: this.c_cantidad,
                subtotal: this.c_subtotal,
                total: this.c_total,
                forma_pago: this.c_pago,
            }

            axios.put('http://localhost:5000/factura/' + this.c_idfactura, unFac).then(resultado => {

                alert(resultado.data);

                this.listarFacturas();

                this.c_idfactura = null;
                this.c_producto = null;
                this.c_cliente = '';
                this.c_iva = '';
                this.c_cantidad = null;
                this.c_subtotal = null;
                this.c_total = null;
                this.c_pago = '';

            });
        },
    },

    created: function() {
        this.listarFacturas();
    }
});
const express = require('express');
const app = express();
const alumnoRoutes = require('./routes/alumnoRoutes');

app.use(express.json());
app.use('/alumnos', alumnoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));


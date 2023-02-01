import XLSX from 'xlsx';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



const ExcelAJSON = async () => {
  const excel = XLSX.readFile(
    __dirname + "/productos-smonkey.xlsx"
  );
  var nombreHoja = excel.SheetNames; // regresa un array
  let datos = await XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);

  const jDatos = [];
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    jDatos.push({
      ...dato,
      Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000)
    });
  }
return jDatos;
};


export default ExcelAJSON;
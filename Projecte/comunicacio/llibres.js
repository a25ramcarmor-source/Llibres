const url = 'http://aperezh.daw.inspedralbes.cat/libros.php';
export async function getLlibres() {
   const resposta = await fetch(url);
    const dades = await resposta.json();
    return dades.libros;
}
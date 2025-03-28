const products = [
  { id: 1, name: 'ürün 1', price: 500 },
  { id: 2, name: 'ürün 1', price: 500 },
  { id: 3, name: 'ürün 1', price: 500 },
  { id: 4, name: 'ürün 1', price: 500 },
  { id: 5, name: 'ürün 1', price: 500 },
];
export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: { 'content-Type': 'application/json' },
    //cevabı json türüne çevirdik headrs ekleyerek http headrında bu cevabı söylememiz gerekiyor
  });
}

//backend kısmı kendimiz bir json yaptık

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.price)
    return new Response(
      JSON.stringify({ error: 'Name ve price alanı zorunludur.' }),
      { status: 400, headers: { 'content-Type': 'application/json' } }
    );
  //name i ve price ı yoksa bu mesajı çıkarsın diyoruz ve bunu yaparken bodyi kontrol ederek yapıyoruz ve hearsı eklemeyi unutmuyoruz bi backend projede

  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
  };
  products.push(newProduct);

  return new Response(
    JSON.stringify({ message: 'ürün başarıyla eklendi', product: newProduct }),
    { status: 201, headers: { 'content-Type': 'application/json' } }
  );

  //yeni ürün eklediğimizde ve bu ürün başarılı şekilde eklendiyse kullanıcıya bu verdiğimiz mesajı yazmış olduk
}

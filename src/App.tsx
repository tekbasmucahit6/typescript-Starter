
import "./index.css"
function App() {




// * değişkenlerde type belirtme

  const age:number = 5
  const name:string = "Mücahit tekbaş"



// * objelerde interface kullanımı

  interface users {
    username : string,
    password : number
  }

  const users:users = {
    username : "mücahit tekbaş",
    password : 1453
  }

  // * objelerde tanımlı olup olmadığına göre type belirleme
  interface userDataType {
    username : string,
    password : string,
    age : number,
    status?: string  //! eğer bir type belirleyeceksek ve tüm objeler de bu tanımlı değilse ? ile tanımlıyoruz
  }

  const userData : userDataType = {
    username : "mücahit tekbaş",
    password : "mücahittekbaş123",
    age : 19
  }

  const userDataV2 : userDataType = {
    username : "mücahit tekbaş",
    password : "mücahittekbaş123",
    age : 19,
    status: "admin"
  }


  // * fonksiyonlarda type belirleme

  const topla = (x:number,y:number) => x + y;


  type toplaFonk = (x:number,y:number) => number

  const topla2:toplaFonk = (x,y) => x + y;

  const sonuc = topla2(4,5)

  console.log(sonuc)

  // * iki type birden tanımlama

  interface usersdata{
    username : string,
    userpassword : number | string ,
    age?: number
  }

  const userdatta:usersdata = {
    username : "mücahit tekbaş",
    userpassword : "1" // 1 number da alabilir string de
  }

  // * dizilerde type belirtme

  interface kanal {
    isim : string,
    takipçi : number
  }

  const kanallar: kanal[] = [ // ! burada [] eklemeyi unutmamalıyız yada bir diğer yöntem ** Array<kanal> ** bu şekilde de kullanım mevcut
    {isim : "youtube",takipçi : 1000},
    {isim : "youtubesadfsaf",takipçi : 1500}
  ]




  return (
    <div className="container">
      {age}
      {name}
    </div>
  )
}

export default App
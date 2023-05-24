import {useRouter} from 'next/router'
export default function Home() {
  const router =  useRouter();
  console.log(router.query);
  /*const {name} = router.query;
  const {place} = router.query;*/
  //let sum = parseInt(router.query.a) + parseInt(router.query.b);
  return (
    <div>
      <h1>
        {router.query.name? `hello,${router.query.name}` : 'i dont know your name'}
      </h1>
    </div>
  );
}

type Props = {
  data: { category: { name: string }, images: string[], title: string, price: number },
}
// cual es el tipado correcto para data.category.name, respondeme en el siguiente comentario
//
const Card = ({ data }: Props): JSX.Element => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category.name}
        </span>
        <img src={data.images[0]} alt='headphones' className='object-cover w-full h-full rounded-lg' />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
        <p className='flex justify-between'>
          <span className='text-sm font-light'>{data.title}</span>
          <span className='text-lg font-bold'>${data.price}</span>
        </p>
      </figure>
    </div>
  )
}

export default Card

import Link from 'next/link'
import Head from 'next/head'

export default function FourOhFour() {
	return (
		<div className='p-2'>
			<Head>
				<title>Заказать съемку для маркетплейса</title>
				<meta
					name='description'
					content='Контактные данные по поиску детей моделей для съемки одежды модных брендов. Предметная фотосъемка одежды для интернет-магазина, маркетплейса (Вайлдберриз, Озон, Ламода, Амазон, Яндекс Маркет, Тиу ру) в Екатеринбурге по выгодной цене. Съемка проходит в фотостудии и может осуществляться нашим профессиональным фотографом или вашим со сдачей в аренду помещения. Узнать точную стоимость услуги легко — просто позвоните по указанному номеру +7 908 911 64 75'
				></meta>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container mx-auto mt-20 px-4 py-2 flex flex-col items-center'>
				<h1 className='text-2xl text-purple-900 font-bold sm:text-2xl'>
					ОЙ! - 404 error
				</h1>
				<Link href='/'>
					<p className='mt-8 text-2xl text-purple-400 font-bold sm:text-2xl ease-in-out duration-150 hover:text-purple-800'>
						Вернуться на главную!
					</p>
				</Link>
			</div>
		</div>
	)
}

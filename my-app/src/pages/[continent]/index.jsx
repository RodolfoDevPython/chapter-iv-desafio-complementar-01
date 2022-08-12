import { useRouter } from "next/router"

export default function PageContinent() {

    const router = useRouter()
    const { continent } = router.query;
    console.log({
        continent
    })
    return (
        <>
        continente
        </>
    )


}

export async function getServerSideProps({ params }) {

    const { continent } = params

    if (continent == 'europa') {
        return {
            props: {
                continent
            },
        }
    }
   
    return {
        redirect: {
            destination: "/",
            permanent: false
        }
    }
}  
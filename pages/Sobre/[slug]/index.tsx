import { useRouter } from "next/router"
import { useState } from "react"

const Pedro = () => {
    const router = useRouter()
    const { slug } = router.query
    const [contador, setContador] = useState<number>(0)

    function handleContador() {
        setContador(contador + 1)
    }

    return (
        <><div>Página sobre[dinamica]de {slug} ({contador})</div><button onClick={handleContador}>aumentar</button></>
    )
}

export default Pedro
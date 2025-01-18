
type ProfileProps = {
    params : Promise<{
        uid : string
    }>
}

export default async function OtherProfilePage({ params } : ProfileProps) {
    const id = (await params).uid;
    return(
        <div>
            Other Profile Page
            {id}
        </div>
    )
}
export default function OtherProfilePage({ params } : { params : {uid : string}}) {
    return(
        <div>
            Other Profile Page
            {params.uid}
        </div>
    )
}
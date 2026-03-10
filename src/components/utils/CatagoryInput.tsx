 type Props = {
        catagory: string,
        setCatagory:(v:string)=>void
    }

export default function CatagoryInput({catagory , setCatagory}:Props){
    return(
        <div className="space-y-4 m-4">
            <input 
            placeholder="catagory.."
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
            className="w-sm border p-3 rounded-xl bg-card"
        />
        </div>
    )
}
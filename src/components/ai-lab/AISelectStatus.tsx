    import { AIElementStatus } from "@/types/ai-lab"
    import { Label } from "../ui/label"
    import { Select , SelectItem , SelectContent , SelectTrigger , SelectValue } from "../ui/select"

    type Props = {
        status: AIElementStatus
        setStatus:(v:AIElementStatus)=>void
    }

    export default function AISelectStatus({status , setStatus}:Props){

        return(
            <div className="space-y-4 m-4">
                <Label>Select Status</Label>
            <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="building">Building</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>

                </SelectContent>
            </Select>
            </div>
        )
    }
    import { ProjectStatus } from "@/types/project"
    import { Label } from "../ui/label"
    import { Select , SelectItem , SelectContent , SelectTrigger , SelectValue } from "../ui/select"

    type Props = {
        status: ProjectStatus
        setStatus:(v:ProjectStatus)=>void
    }

    export default function SelectStatus({status , setStatus}:Props){

        return(
            <div className="space-y-2">
                <Label>Select Status</Label>
            <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In-progress</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
                </SelectContent>
            </Select>
            </div>
        )
    }
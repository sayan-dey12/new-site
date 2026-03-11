    import { AIElementCategory } from "@/types/ai-lab"
    import { Label } from "../ui/label"
    import { Select , SelectItem , SelectContent , SelectTrigger , SelectValue } from "../ui/select"

    type Props = {
        category: AIElementCategory,
        setCategory:(v:AIElementCategory)=>void
    }

    export default function AILabCatagorySelect({category , setCategory}:Props){

        return(
            <div className="space-y-4 m-4">
                <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="experiment">Experiment</SelectItem>
                <SelectItem value="agent">Agent</SelectItem>
                <SelectItem value="tool">Tool</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                </SelectContent>
            </Select>
            </div>
        )
    }
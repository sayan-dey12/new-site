    import { ProjectCategory } from "@/types/project"
    import { Label } from "../ui/label"
    import { Select , SelectItem , SelectContent , SelectTrigger , SelectValue } from "../ui/select"

    type Props = {
        category: ProjectCategory,
        setCategory:(v:ProjectCategory)=>void
    }

    export default function ProjectCatagorySelect({category , setCategory}:Props){

        return(
            <div className="space-y-4 m-4">
                <Label>Category</Label>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="fullstack">Full-Stack</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
                <SelectItem value="systems">Systems</SelectItem>
                <SelectItem value="others">Others</SelectItem>
                </SelectContent>
            </Select>
            </div>
        )
    }
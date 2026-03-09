    import { Label } from "../ui/label"
    import { Select , SelectItem , SelectContent , SelectTrigger , SelectValue } from "../ui/select"

    type Props = {
        catagory: string,
        setCatagory:(v:string)=>void
    }

    export default function CatagorySelect({catagory , setCatagory}:Props){


        return(
            <div className="space-y-2">
                <Label>Category</Label>
            <Select value={catagory} onValueChange={setCatagory}>
                <SelectTrigger>
                <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="ai">AI</SelectItem>
                <SelectItem value="webdev">Web Development</SelectItem>
                <SelectItem value="case_study">Case Study</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="career_journey">Career Journey</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="personal_experience">Personal Experience</SelectItem>
                <SelectItem value="stories">Stories</SelectItem>
                </SelectContent>
            </Select>
            </div>
        )
    }
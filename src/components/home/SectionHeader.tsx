
interface Props {
    title : string , 
    subtitle: string
}

export default function SectionHeader({title , subtitle} : Props){
    return(
        <div className="mt-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">{title}</h2>
            {subtitle && <p className="mt-1 mb-4 text-sm text-primary-foreground max-w-2xl">
                    {subtitle}
                </p>}
        </div>
    )
}
export default function CreateSlug(text:string | undefined){

    if(text === undefined)
    {return}
    return text.toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    
}
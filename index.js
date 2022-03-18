export function testType(data)
{
    return typeof(data)
}
export function contains (data,pattern)
{
    if(typeof(data)=="string" && typeof(pattern)=="string")
    {
        const index = data.match(pattern)
        if(index)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
        return false;
}

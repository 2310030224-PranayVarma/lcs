export const getlcs = (req,res)=>
{
    console.log("LCS: ");
    res.send(LCS())
}

function LCS(str1,str2,n, m)
{
    if(n==0||m==0)
        return 0;
    if(str1[N-1]==str2[M-1])
    {
        return 1+LCS(str1,str2,n-1,m-1);
    }
    return Math.max(LCS(str1,str2,n-1,m),LCS(str1,str2,n,m-1));
}
/*
localhost:3000?str1
*/

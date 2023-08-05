function distanceFromHqInBlocks(pickUp)
{
    const scubHq = 42;
    const numOfBlocks = scubHq - pickUp;
    return Math.abs(numOfBlocks);
}
console.log(distanceFromHqInBlocks(68));

function distanceFromHqInFeet (pickUp)
{
   const blocks = distanceFromHqInBlocks (pickUp);
   return (blocks*264)

}
console.log(distanceFromHqInFeet(68))

function distanceTravelledInFeet (startBlock, destBlock)
{
    return (Math.abs((startBlock-destBlock))*264);
}
console.log(distanceTravelledInFeet(34,38));

function calculatesFarePrice (startBlock, destBlock)
{
    const distance = distanceTravelledInFeet(startBlock, destBlock)
    if (distance<=400)
        {return 0;}
    else if (distance>400 && distance <=2000)
        {return ((distance - 400) * 0.02);}
    else if (distance > 2000 && distance <= 2500)
        {return 25;}
    else
        {return "cannot travel that far"}
}
console.log(calculatesFarePrice(34,38));
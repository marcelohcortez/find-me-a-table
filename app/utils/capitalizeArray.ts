export const capitalizeArray = ({ params }: {params: {slug: string}} ) => {
    const nameArray = params.slug.split("-");
    let capitalizedArray: string[] = []

    nameArray.map((nameItem) => {
        nameItem = nameItem.charAt(0).toUpperCase() + nameItem.slice(1);
        capitalizedArray.push(nameItem)
    });

    capitalizedArray[capitalizedArray.length -1] = `(${capitalizedArray[capitalizedArray.length -1]})`;

    return capitalizedArray.join(" ");
}
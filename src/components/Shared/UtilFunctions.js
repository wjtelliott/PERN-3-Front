export const convertDate = (date) => {
    const gametime = new Date(date * 1000);
    return gametime.toLocaleDateString("en-us", {
        // year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
    });
};

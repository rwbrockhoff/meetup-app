
//Converts time property from EventResponse to local date string
export const getDateString = date => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options)
}

//Filter RSVPS with organizer at start, and limit to 6 total members.
export const filterWaitList = members => {
    //If given no arguments
    if (!members || !members.length) return [];
    let organizerIndex = members.findIndex(e => e.member.role === 'organizer')
    let memberList = [members[organizerIndex]]
    //If 6 or less total members, return full list
    if (members.length <= 5) {
        memberList.push(...members.splice(organizerIndex, 1))
        return memberList
    }
    for (let i = 0; memberList.length <= 5; i++) {
        let person = members[i];

        if (person.response === 'yes' && person.member.role !== 'organizer') {
            memberList.push(person)
        }
    }
    return memberList;
}

//Convert Local Military Time to 12HR format
export const convertMilitaryTime = time => {
    return new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

//Determine End Time based on Start Time and Duration
export const convertDurationTime = (start, duration) => {
    return new Date(start + duration).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}
export const removeDuplicateEmails = (records) => {
    const emailSet = new Set();
    return records.filter((record) => {
        if (emailSet.has(record.email)) return false;
        emailSet.add(record.email);
        return true;
    });
};

export const mergeRecords = (existingRecords, newRecords) => {
    const existingEmails = new Set(
        existingRecords.map((record) => record.email),
    );
    const merged = [
        ...existingRecords,
        ...newRecords.filter((record) => !existingEmails.has(record.email)),
    ];
    return merged;
};

// export const searchRecords = (records, searchTerm) => {
//     if (!searchTerm) return records;
//     return records.filter(
//         (record) =>
//             record.id.includes(searchTerm) ||
//             record.name.includes(searchTerm) ||
//             record.email.includes(searchTerm),
//     );
// };

export const searchRecords = (records, searchTerm) => {
    if (!searchTerm) return records;
    return records.filter((record) =>
        String(record.id).includes(searchTerm) ||
        record.name.includes(searchTerm) ||
        record.email.includes(searchTerm)
    );
};


function createTransactions(date, field, updatedValue, oldValue, username) {
  return {
    date,
    field,
    updatedValue,
    oldValue,
    username
  };
}

export const transactions = [
  createTransactions('Jul 02, 2021', 'Zip', '95826', '95823', 'Exchange Admin'),
  createTransactions('Oct 24, 2014', 'Certification', 'Cert', 'N/A', 'Admin'),
  createTransactions('Jul 02, 2021', 'Zip', '95826', '95823', 'Exchange Admin'),
  createTransactions('Oct 24, 2014', 'Certification', 'Cert', 'N/A', 'Admin'),
  createTransactions('Jul 02, 2021', 'Zip', '95826', '95823', 'Exchange Admin'),
  createTransactions('Oct 24, 2014', 'Certification', 'Cert', 'N/A', 'Admin'),
  createTransactions('Jul 02, 2021', 'Zip', '95826', '95823', 'Exchange Admin'),
  createTransactions('Oct 24, 2014', 'Certification', 'Cert', 'N/A', 'Admin'),
  createTransactions('Jul 02, 2021', 'Zip', '95826', '95823', 'Exchange Admin'),
  createTransactions('Oct 24, 2014', 'Certification', 'Cert', 'N/A', 'Admin')
];

export const transactionsHeaders = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'Date'
  },
  {
    id: 'field',
    numeric: true,
    disablePadding: false,
    label: 'Field'
  },
  {
    id: 'updatedValue',
    numeric: true,
    disablePadding: false,
    label: 'Updated Vluae'
  },
  {
    id: 'oldValue',
    numeric: true,
    disablePadding: false,
    label: 'Old Value'
  },
  {
    id: 'username',
    numeric: true,
    disablePadding: false,
    label: 'Username'
  }
];

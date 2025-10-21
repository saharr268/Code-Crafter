export const timeAgoFa = (dateInput) => {
  const date = new Date(dateInput);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const units = [
    { name: "ثانیه", value: 60 },
    { name: "دقیقه", value: 60 },
    { name: "ساعت", value: 24 },
    { name: "روز", value: 30 },
    { name: "ماه", value: 12 },
    { name: "سال", value: Infinity },
  ];

  let count = diffInSeconds;
  let unit = "ثانیه";

  for (let i = 0; i < units.length; i++) {
    if (count < units[i].value) break;
    count = Math.floor(count / units[i].value);
    unit = units[i + 1]?.name || units[i].name;
  }

  const toPersianDigits = (num) =>
    num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  return `${toPersianDigits(count)} ${unit} پیش`;
};

export const anglesbetweenhourandmin = (h, m) => {
  const hStep = 30; // 360/12
  const mStep = 6; // 360/(12*60)

  let hourAngle = hStep * h;
  const minAngle = mStep*m;
  hourAngle+=(minAngle/360)*hStep;
  
  return Math.abs(hourAngle-minAngle);
};

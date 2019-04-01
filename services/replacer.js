const replacer = content => {
  const pattern = new RegExp(process.env.wpUrl, 'g');
  return content.replace(pattern, '');
}

export default replacer;

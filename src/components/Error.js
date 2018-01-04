export default function(source, type, error, apiConfig) {
  const errorMsgShort = `Error in ${source}`;
  const errorMsgLong = `Error in ${source}: '${error.message}' on call '${
    apiConfig.url
  }'`;

  console.log(errorMsgLong);  // eslint-disable-line

  return {
    type,
    data: [errorMsgShort],
    title: errorMsgShort,
  };
}

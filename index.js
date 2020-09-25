module.exports = ({input, context, subscription}) => {
  let mesage = "Hello world";
  let organization = await context.getOrganization();
  await subscription.notifyInProgress({"log": "Organization Data Retrieved"});
  
  return {
    "accountId": input.accountId,
    "organization": organization.name,
    "offering": input.offering,
    "valueProposition": input.value_proposition,
    "message": message
  };
};

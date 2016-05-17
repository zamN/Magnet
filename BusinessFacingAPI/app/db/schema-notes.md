account has many pieces of property </br>
a piece of property belongs to an account </br>
a loan belongs to an account as lender_id </br>
a loan belongs to an account as borrower_id </br>
an account has many loans </br>
# accounts
  -id </br>
  -email </br>
  -username </br>
  -password </br>
# property
  -id </br>
  -user_id </br>
  -item_id </br>
  -types </br>
# item 
  -id </br>
  -image </br>
# loans 
  -property_id </br>
  -lender_id </br>
  -borrower_id </br>

export class Plan {

  // "claim_id": "fe5f367b-c2c0-4d34-b5c0-72d60d93f049",
  //       "policy_id": "RSSSTGZ08R5V",
  //       "policy_holder_id": "7821b3c3-ecf4-436a-b16a-a09f48e1a619",
  //       "claim_type": "Janta Farzi Insurance",
  //       "claim_status": "In Progress",
  //       "claim_amount": "8000.00",
  //       "supported_document_url": null,
  //       "claim_submission_date": "25/09/2023",
  //       "claim_approval_date": null
  constructor(
    public claim_id: any,
    public claim_type: any,
    public claim_status: any,
    public claim_amount: any,
    public supported_document_url: any,
    public claim_submission_date: any,
    public claim_approval_date: any,

  ) {}
}

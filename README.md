# Team it_works_on_local
## PROBLEM NAME:

#### Catalogue scoring
DESCRIPTION OF THE PROBLEM STATEMENT:

Buyer Apps find it difficult to ensure that the catalogue they receive from Seller Apps is of a minimum acceptable quality such that their User Experience is not adversely affected. Example: Imagine receiving a catalogue of Products with no images, no price or incorrect product details.

Given the large volume of items in a catalogue,Buyer Apps need an efficient mechanism to easily gauge the quality of the catalogue.

A ready solution for this does not exist. In most instances the catalogue has to be examined manually.

In the open network, different buyer NPs will have different requirements from sellers with respect to their catalogues, including -
- Compliance - Ensuring the catalogue complies with the applicable laws (e.g.: Labelling and display regulations under various statutes.
- Correctness - Authenticity of the catalogue (e.g.: appropriate use of branding)
- Completeness - The Catalogue should provide some minimum attributes such that the buyer can understand the product features clearly.

Further, the Buyer App has no direct connection with the Seller to be able to do due diligence on them, and only receives the catalogue upon performing a search. This means the usual manual processes deployed to assess catalogue quality are not feasible in the open network.

The objective is to create a catalog scoring mechanism for assessment of compliance, correctness and completeness at an aggregate level, as explained above.

Catalog scoring mechanism should define a set of granular assessment parameters & weight for each parameter and using this compute an objective store for a merchant catalog. 

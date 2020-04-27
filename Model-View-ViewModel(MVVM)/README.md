# Model (Data/Business Logic == JS)
It contains RAW data from any source and any form.
It doesnot contain any presentation logic.
It contains only data logics for getting from source.

# View (UI/Presentation == HTML CSS)
It represents data using html css
It doesn't change
It declaratively broadcast events but never handles it

# ViewModel (Presentation Login == JS)
It represents state of the view,
It reponds to view events aka presentation logic
It calls other functionality for business logic processing
It never directly ask view to display anything means it doesn't what id the HTML element has , example of loose coupling


The Crucial Component of this Design Pattern:
# Declarative Binder
It declaratively binds the Model of the ViewModel to the view
-- Declaratively means = No need to write code for that, the framework does this magic
It is the key enabler of this MVVM Pattern



# AngularJS not restricted MVVM, it gives freedom to replace ViewModel with Whatever/other JS lib to customize design pattern. like D3 JS 



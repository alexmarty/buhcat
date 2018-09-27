import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    // "It works" page
    router.get { req in
        return try req.view().render("index")
    }
    
    router.get("about") { req in
        return try req.view().render("about")
    }
    
    router.get("price") { req in
        return try req.view().render("price")
    }
    
    // Says hello
    router.get("hello", String.parameter) { req -> Future<View> in
        return try req.view().render("hello", [
            "name": req.parameters.next(String.self)
        ])
    }
}

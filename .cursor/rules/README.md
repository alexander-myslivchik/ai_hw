# Cursor Rules Guide

## Overview

This repository contains Cursor IDE rules for maintaining code quality and consistency in our TypeScript projects.

## Rule Categories

1. **Documentation Rules**
   - Enforces JSDoc documentation
   - Ensures comprehensive code documentation
   - Helps generate API documentation

2. **Type Safety Rules**
   - Requires explicit type annotations
   - Prevents implicit 'any' types
   - Enforces strict null checks

3. **Naming Convention Rules**
   - Enforces consistent naming patterns
   - Makes code more predictable
   - Improves code readability

## How to Use

### Basic Usage

1. Rules are automatically applied while coding
2. See warnings/errors in the Problems panel
3. Use Quick Fix (Ctrl+.) for automated fixes
4. Run bulk fixes with the "Cursor: Fix All" command

### Disabling Rules

You can disable rules in three ways:

1. **Inline disable for next line:**
   ```typescript
   // cursor-disable-next-line rule-name
   function BadName() {}
   ```

2. **Inline disable for current line:**
   ```typescript
   function BadName() {} // cursor-disable-line rule-name
   ```

3. **Disable for file:**
   ```typescript
   /* cursor-disable rule-name */
   ```

### Configuration

Rules can be configured in `.cursor/settings.json`:

```json
{
    "rules": {
        "documentation-required": {
            "severity": "warning",
            "enabled": true
        },
        "explicit-return-type": {
            "severity": "error",
            "enabled": true
        }
    }
}
```

## Rule Severity Levels

- **error**: Must be fixed before committing
- **warning**: Should be fixed but won't block commits
- **suggestion**: Optional improvements
- **off**: Rule is disabled

## Best Practices

1. **Regular Updates**
   - Keep rules up to date
   - Review and adjust rules quarterly
   - Add new rules as needed

2. **Team Communication**
   - Discuss rule changes with team
   - Document rule modifications
   - Share rule documentation

3. **Continuous Integration**
   - Include rule checks in CI/CD
   - Automate rule validation
   - Track rule violations

## Troubleshooting

Common issues and solutions:

1. **Rules not applying:**
   - Check if rules are enabled in settings
   - Verify file is in `applies_to` pattern
   - Restart Cursor IDE

2. **False positives:**
   - Use inline disable comments
   - Report issues to maintainers
   - Adjust rule patterns

3. **Performance issues:**
   - Disable heavy rules temporarily
   - Use `.cursorignore` for large files
   - Optimize rule patterns

## Contributing

To add or modify rules:

1. Fork the rules repository
2. Make changes following MDC format
3. Test rules thoroughly
4. Submit pull request

## Support

For help with rules:
- Check documentation
- Ask in team chat
- Report issues on GitHub 